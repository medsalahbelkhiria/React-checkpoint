import React from 'react';
import './App.css';

function App() {
	return (
		<div className="container contact">
			<div className="row">
				<div className="col-md-3">
					<div className="contact-info">
						<img
							style={{ width: '64px' }}
							src="https://images.vexels.com/media/users/3/136808/isolated/preview/d3455a22af5f3ed7565fb5fb71bb8d43-send-message-icon-by-vexels.png"
							alt="image"
						/>
						<h2 className="contact-title">Contact Us</h2>
						<h4 className="contact-title">We would love to hear from you !</h4>
					</div>
				</div>
				<div className="col-md-9">
					<div className="contact-form">
						<div className="form-group">
							<label className="control-label col-sm-2" for="fname">
								First Name:
							</label>
							<div className="col-sm-10">
								<input
									type="text"
									className="form-control"
									id="fname"
									placeholder="Enter First Name"
									name="fname"
								/>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-sm-2" for="lname">
								Last Name:
							</label>
							<div className="col-sm-10">
								<input
									type="text"
									className="form-control"
									id="lname"
									placeholder="Enter Last Name"
									name="lname"
								/>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-sm-2" for="email">
								Email:
							</label>
							<div className="col-sm-10">
								<input
									type="email"
									className="form-control"
									id="email"
									placeholder="Enter email"
									name="email"
								/>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-sm-2" for="comment">
								Message:
							</label>
							<div className="col-sm-10">
								<textarea className="form-control" rows="5" id="comment" />
							</div>
						</div>
						<div className="form-group">
							<div className="col-sm-offset-2 col-sm-10">
								<button type="submit" className="btn btn-default">
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
