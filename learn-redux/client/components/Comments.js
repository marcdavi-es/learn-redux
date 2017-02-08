import React from 'react';

class Comments extends React.Component {
	renderComment(comment, i) {
		console.log('This is comment %s: %s', i, comment);
		return (
			<div className="comment" key={i}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button className="remove-comment">&times;</button>
				</p>
			</div>
		)
	}
	render() {
		return (
			<div className="comments">
				{this.props.postComments.map(this.renderComment)}
				<form ref="commentForm" className="comment-form">
					<input type="text" ref="author" placeholder="Name"/>
					<input type="text" ref="comment" placeholder="Comment"/>
					<input type="submit" hidden/>
				</form>
			</div>
			)
	}
}

export default Comments;

