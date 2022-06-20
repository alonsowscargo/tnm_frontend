import React from "react";

import {
    Button,
    makeStyles
} from '@material-ui/core';

import Skeleton from '@material-ui/lab/Skeleton';

import {
    BsFileEarmarkText,
} from "react-icons/bs";


const useStyles = makeStyles({
    root: {
        width: "100%",
        marginBottom: 16,
    },
});


const SkeletonTable = ({ data }) => {
    const classes = useStyles();

    const dataSkeleton = [
        { data: '1'},
        { data: '1'},
        { data: '1'},
        { data: '1'},
        { data: '1'},
        { data: '1'},
        { data: '1'},
        { data: '1'},
        { data: '1'},
        { data: '1'},
        { data: '1'},
        { data: '1'}
    ]

    return (
        <div>
            <div className={classes.root}>
                <Skeleton animation="wave" height={40} />
            </div>

            <table id="customers">
                <thead>
                    <tr>
                        {/* <th></th> */}
                        <th><Skeleton animation="wave" /></th>
                        <th><Skeleton animation="wave" /></th>
                        <th><Skeleton animation="wave" /></th>
                        <th><Skeleton animation="wave" /></th>
                        <th><Skeleton animation="wave" /></th>
                        <th><Skeleton animation="wave" /></th>
                        <th><Skeleton animation="wave" /></th>
                        <th><Skeleton animation="wave" /></th>
                        <th><Skeleton animation="wave" /></th>
                        <th><Skeleton animation="wave" /></th>
                    </tr>
                </thead>
                {/* <tbody> */}
                {
                    dataSkeleton.map((el, index) => (
                        <tbody key={index}>
                            <tr>
                                {/* <td className="cl-4"><Skeleton animation="wave" /></td> */}
                                <td><Skeleton animation="wave" /></td>
                                <td><Skeleton animation="wave" /></td>
                                <td><Skeleton animation="wave" /></td>
                                <td><Skeleton animation="wave" /></td>
                                <td><Skeleton animation="wave" /></td>
                                <td><Skeleton animation="wave" /></td>
                                <td><Skeleton animation="wave" /></td>
                                <td><Skeleton animation="wave" /></td>
                                <td><Skeleton animation="wave" /></td>
                                <td><Skeleton animation="wave" /></td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    );
};

export default SkeletonTable;



