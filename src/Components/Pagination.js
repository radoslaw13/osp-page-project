import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Grid from '@material-ui/core/Grid';
import "../assets/css/Pagination.css";


class Pagination extends Component {
    render() {
        return (
            <Grid item md={12} lg={12} xs={12} >
                        <div style={{margin: "0 auto", display: "flex"}}> 
                        <ReactPaginate 
                            pageCount={this.props.pages}
                            pageRangeDisplayed={5}
                            marginPagesDisplayed={0}
                            breakLabel={'...'}
                            previousLabel={""}
                            nextLabel={""}
                            breakClassName={"li"}
                            breakLinkClassName={"a"}
                            containerClassName={"paginationu1"}
                            pageClassName={"li"}
                            pageLinkClassName={"a"}
                            activeClassName={"liactive"}
                            activeLinkClassName={"aactive"}
                            onPageChange={this.props.onPageChange}
                        />
                        </div>
            </Grid>
        )
    }
}

export default Pagination;