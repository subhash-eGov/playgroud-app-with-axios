import React from "react";
import Results from "./Results.js";
import NoData from "./NoData.js";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

import "./Search.css";

class SearchResult extends React.Component {
  render() {
    const {rows=[]} = this.props;
    let display;
    if (rows.length > 0) {
      display = <Results rows={rows}/>;
    } else {
      display = <NoData/>;
    }
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
              {display}
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </div>);
  }
}

export default SearchResult;
