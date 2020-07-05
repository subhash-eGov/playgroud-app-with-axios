import React from "react";

import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';

import "./Search.css";

class NoData extends React.Component {
  render() {
    return (<TableHead>
      <TableRow>
        <TableCell/>
        <TableCell/>
        <TableCell>
          No Data Available
        </TableCell>
        <TableCell/>
      </TableRow>
    </TableHead>);
  }
}

export default NoData;
