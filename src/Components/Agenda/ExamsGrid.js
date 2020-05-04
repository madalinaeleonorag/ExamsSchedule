import React, { Component } from "react";
import "./ExamsGrid.css";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

class ExamsGrid extends Component {
    render() {
        return (
            <div>
                <GridList cellHeight={200} cols={3}>
                    {this.props.data.map((item) => (
                        <GridListTile className="exams-grid" key={item.id}>
                            <div className="exams-grid-materie">{item.materie}</div>
                            <div className="exams-grid-text">exam</div>
                            <div className="exams-grid-dataExamen">{item.dataExamen}</div>
                            <GridListTileBar
                                title={<span>Teacher: {item.profesor}</span>}
                                subtitle={<span>Year: {item.anStudiu}, {item.sectie}</span>}
                                actionIcon={
                                    <IconButton>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

export default ExamsGrid;