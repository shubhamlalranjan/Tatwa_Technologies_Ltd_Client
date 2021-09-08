import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Icon,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ExpandMoreTwoTone } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { indigo } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  accordionRoot: {
    marginTop: "0px !important",
    marginBottom: "0px !important",
    "&:before": {
      display: "none",
    },
  },
  accordionExpanded: {
    backgroundColor: indigo["50"],
    marginBottom: "0px !important",
    marginTop: "0px !important",
  },
  menuTitle: {
    color: indigo["500"],
  },
  expandIcon: {
    color: indigo["500"],
    padding: "8px 0px",
    margin: "0px 15px 0px 0px",
  },

  // acordation summary root
  summaryRoot: {
    position: "relative",
    minHeight: "42px !important",
    height: "42px !important",
    lineHeight: "42px !important",
  },
  detailsRoot: {
    padding: "0px 16px",
  },
  listRoot: {
    padding: "0px 0px 5px 0px",
    width: "100%",
  },
}));

export default function MenuItem({ data, expanded, handleChange }) {
  const classes = useStyles();
  return (
    <Accordion
      expanded={expanded === data.id}
      classes={{
        root: classes.accordionRoot,
        expanded: classes.accordionExpanded,
      }}
      elevation={0}
      onChange={() => handleChange(data.id)}>
      <AccordionSummary
        expandIcon={<ExpandMoreTwoTone />}
        children={
          <div>
            <Typography className={classes.menuTitle}>
              {data.moduleName}
            </Typography>
            <Icon
              className={data.moduleIcon}
              style={{ position: "absolute", right: "10px", top: "8px" }}
            />
          </div>
        }
        aria-controls={data.id}
        id={data.id}
        classes={{
          root: classes.summaryRoot,
          expandIcon: classes.expandIcon,
        }}></AccordionSummary>
      <AccordionDetails classes={{ root: classes.detailsRoot }}>
        <List dense classes={{ root: classes.listRoot }}>
          {data.children.map((item) => (
            <ListItem
              key={item.key}
              component={NavLink}
              style={{
                color: indigo["500"],
                borderTop: "1px solid #072cff30",
              }}
              activeStyle={{ color: indigo["700"] }}
              to={item.moduleUrl}>
              <ListItemText>
                <Typography variant='body1' component='h6'>
                  {item.moduleName}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
