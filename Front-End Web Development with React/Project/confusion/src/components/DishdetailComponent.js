import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({selectedDish}){
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                    <CardTitle heading>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function RenderComments({commentsArray}){
    const comments = commentsArray.map((comment) => {
        const date = new Date(comment.date).toDateString();
        return (
            <ul class="list-unstyled">
                <li>{comment.comment}</li>
                <li>-- {comment.author}, { date }</li>
            </ul>            
        );
    })
    return(
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {comments}
        </div>
    )
}

const DishDetail = (props) => {
    if (props.selectedDish != null) {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish selectedDish={props.selectedDish} />
                    <RenderComments commentsArray={props.selectedDish.comments} />
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;
