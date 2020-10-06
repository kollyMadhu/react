import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { mapStateToProps } from "../reducers/index";
import * as middleware from "../action/middleware/showsDeshboardMiddleware";

class SearchShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: this.props.searchResult,
      genresVal: ''
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    /* let arrayVal = "";

    if (state.searchResult.show.genres) {
      state.searchResult.show.genres.map(function (val, id) {
        let arraylength = state.searchResult.show.genres.length;
        if (arraylength > id + 1) arrayVal = `${arrayVal}${val} | `;
        else arrayVal = `${arrayVal}${val} `;
      });
      state.genresVal = arrayVal;
    } */
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <div class="jumbotron">
        <button onclick={this.goBack}>Go Back</button>
            <br /> <br />
          {this.state.searchResult
            ? this.state.searchResult.map(function (searchArrayData) {
                return (
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <h5>{searchArrayData.show.name || "N/A"}</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          src={
                            searchArrayData.show.image &&
                            searchArrayData.show.image.medium
                              ? searchArrayData.show.image.medium
                              : "N/A"
                          }
                          alt="N/A"
                        />
                      </div>
                      <div
                        className="col-md-4"
                        dangerouslySetInnerHTML={{
                          __html: searchArrayData.show.summary || 'N/A',
                        }}
                      ></div>
                      <div className="col-md-5">
                        <div class="card">
                          <div class="card-header">
                            <h4>Show Info</h4>
                            <span>
                              <b>Language:</b>
                            </span>{" "}
                            {searchArrayData.show.language || "N/A"}
                            <br />
                            <span>
                              <b>Status:</b>
                            </span>{" "}
                            {searchArrayData.show.status || "N/A"}
                            <br />
                            <span>
                              <b>Show Type:</b>
                            </span>{" "}
                            {searchArrayData.show.type || "N/A"}
                           {/*  <br />
                            <span>
                              <b>Genres:</b>
                            </span>{" "}
                            {searchArrayData.show.genresVal? 
                            ( searchArrayData.show.genres.map(function (val, id) {
                                let arraylength = searchArrayData.show.genres.length;
                                if (arraylength > id + 1) arrayVal = `${arrayVal}${val} | `;
                                else arrayVal = `${arrayVal}${val} `;
                              }) 
                             )
                              : null
                            
                            } */}
                            <br />
                            <span>
                              <b>episodes Official site:</b>
                            </span>{" "}
                            {searchArrayData.show.officialSite || "N/A"}
                            <br />
                            <span>
                              <b>Rating:</b>
                            </span>{" "}
                            {searchArrayData.show.rating &&
                            searchArrayData.show.rating.average
                              ? searchArrayData.show.rating.average
                              : "N/A"}
                          </div>
                        </div>
                      </div>
                    </div><br /> <br />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SearchShow);
