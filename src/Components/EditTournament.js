import React from "react";

function EditTournament() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label>TournamentName</label>
            <input type={"text"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label>Email</label>
            <input type={"text"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>Address</label>
            <input type={"text"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>Phone</label>
            <input type={"number"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>StartDate</label>
            <input type={"Date"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>EndDate</label>
            <input type={"Date"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>Status</label>
            <select className="form-control">
              <option value="">select</option>
              <option value="">Upcoming</option>
              <option value="">Ongoing</option>
              <option value="">Completed</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <input type={"submit"} className="btn btn-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTournament;
