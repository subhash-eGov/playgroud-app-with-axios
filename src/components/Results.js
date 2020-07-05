import React from "react";

import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import "./Search.css";

class Results extends React.Component {
  render() {
    const {
      rows = []
    } = this.props;
    return (<div>
      <TableBody className="tablebody">
        {
          rows.map((row) => (<TableRow key={row.module}>
            <TableCell align="center" component="th" scope="row">
              {row.module}
            </TableCell>
            <TableCell align="center">{row.locale}</TableCell>
            <TableCell align="center">{row.message}</TableCell>
            <TableCell align="center">{row.code}</TableCell>
          </TableRow>))
        }
      </TableBody>
    </div>);
  }
}

export default Results;
