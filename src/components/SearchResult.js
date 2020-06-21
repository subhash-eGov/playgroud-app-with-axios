import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import "./Search.css";

class SearchResult extends React.Component {
  render() {
    const {rows=[]} = this.props;
    return (<div>
      <Grid item="item" xs={12}>
        <Paper>
          <TableContainer component={Paper}>
            <Table className="table" aria-label="customized table">
              <TableHead>
                <TableRow className="tablerow">
                  <TableCell align="center" className="tablecell">Module</TableCell>
                  <TableCell align="center" className="tablecell">Locale</TableCell>
                  <TableCell align="center" className="tablecell">Message</TableCell>
                  <TableCell align="center" className="tablecell">Code</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="tablebody">
                {
                  rows.map((row) => (
                    <TableRow key={row.module}>
                    <TableCell align="center" component="th" scope="row">
                      {row.module}
                    </TableCell>
                    <TableCell align="center">{row.locale}</TableCell>
                    <TableCell align="center">{row.message}</TableCell>
                    <TableCell align="center">{row.code}</TableCell>
                  </TableRow>))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </div>);
  }
}

export default SearchResult;
