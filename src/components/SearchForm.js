import React from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import SearchResult from "./SearchResult.js";

import axios from "axios";

const instance = axios.create({baseURL: window.location.origin});

class SearchForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modules: [],
      languages: [],
      rows: [],
      showResult: false,
      selectedModule: null,
      selectedLocale: null
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount = () => {
    instance.post('egov-mdms-service/v1/_search?tenantId=pb', {
      "RequestInfo": {
        "apiId": "Rainmaker",
        "ver": ".01",
        "ts": "",
        "action": "_search",
        "did": "1",
        "key": "",
        "msgId": "20170310130900|en_IN",
        "authToken": null
      },
      "MdmsCriteria": {
        "tenantId": "pb",
        "moduleDetails": [
          {
            "moduleName": "common-masters",
            "masterDetails": [

              {
                "name": "StateInfo"
              }
            ]
          }
        ]
      }
    }).then((response) => {
      const stateInfo = response.data.MdmsRes['common-masters'].StateInfo[0];
      console.log(stateInfo);
      let languagesForDropdown = stateInfo.languages.map((lang) => {
        return {value: lang.value, key: lang.label};
      });
      let modulesForDropdown = stateInfo.localizationModules.map((mod) => {
        return {value: mod.value, key: mod.label};
      });
      this.setState({modules: modulesForDropdown, languages: languagesForDropdown});
    }).catch((error) => {
      console.log(error);
    });
  };

  handleSearch = () => {
    console.log(this.state.selectedLocale);
    console.log(this.state.selectedModule);
    let defaultLocale = '&locale=en_IN';
    let api = 'localization/messages/v1/_search?tenantId=pb';
    if (this.state.selectedModule)
      api = api + "&module=" + this.state.selectedModule;
    if (this.state.selectedLocale)
      api = api + "&locale=" + this.state.selectedLocale;
    else {
      api = api + defaultLocale;
    }
    console.log(api);
    instance.post(api, {
      "RequestInfo": {
        "apiId": "Rainmaker",
        "ver": ".01",
        "ts": "",
        "action": "_search",
        "did": "1",
        "key": "",
        "msgId": "20170310130900|en_IN",
        "authToken": null
      }
    }).then((response) => {
      this.setState({
        rows: response.data.messages,
        showResult: true});
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const {rows=[], showResult={}} = this.state;
    let result;
    if (showResult) {
      result = <SearchResult rows={rows}/>
    } else {
      result = null;
    }
    return (<div>
      <Grid item="item" xs={12}>
        <Paper>
          <form>
            <h2>Search Form</h2>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-module-native-simple">Module</InputLabel>
              <Select onChange={(e) => {
                  this.setState({selectedModule: e.target.value});
                }} native="native" label="Module" id="moduleId" inputProps={{
                  name: 'module',
                  id: 'outlined-module-native-simple'
                }}>
                <option aria-label="None" value=""/> {
                  this.state.modules.map((mod) => {
                    return <option value={mod.value} key={mod.key}>{mod.value}</option>
                  })
                }
              </Select>
            </FormControl><br/><br/>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-locale-native-simple">Locale</InputLabel>
              <Select onChange={(e) => {
                  this.setState({selectedLocale: e.target.value});
                }} native="native" label="Locale" inputProps={{
                  name: 'locale',
                  id: 'outlined-locale-native-simple'
                }}>
                <option aria-label="None" value=""/> {
                  this.state.languages.map((lan) => {
                    return <option value={lan.value} key={lan.key}>{lan.value}</option>
                  })
                }
              </Select>
            </FormControl>
            <br/><br/>
            <Button onClick={this.handleSearch} variant="contained" color="primary">
              Search
            </Button>
            <br/><br/>
          </form>
        </Paper>
      </Grid>
      {result}
    </div>);
  }
}

export default SearchForm;
