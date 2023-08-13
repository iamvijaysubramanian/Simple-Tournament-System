import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Tournament() {
  const [tournament, setTournaments] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      setLoading(true);
      const tournaments = await axios.get(
        "https://634d63a6acb391d34a9c1ad0.mockapi.io/teachers"
      );
      setTournaments(tournaments.data);
      setLoading(false);
    } catch (error) {
      alert("error");
    }
  };

  let deleteTournament = () => {
    const result = window.confirm("Are you sure do you want to delete");
    if (result) {
      alert("Deleted");
    }
  };
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Tournaments</h1>
        <Link
          to={"/portal/tournaments/tournament_create"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create
          Tournament{" "}
        </Link>
      </div>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Tournament List
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                // cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>TournamentName</th>
                    <th>StartDate</th>
                    <th>EndDate</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>TournamentName</th>
                    <th>StartDate</th>
                    <th>EndDate</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {tournament.map((tournament) => {
                    return (
                      <tr>
                        <td>{tournament.id}</td>
                        <td>{tournament.tournamentname}</td>
                        <td>{tournament.startdate}</td>
                        <td>{tournament.enddate}</td>
                        <td>{tournament.address}</td>
                        <td>{tournament.status}</td>
                        <td>
                          <Link
                            to={`tournament/${tournament.id}`}
                            className="btn btn-primary mr-2 md-2"
                          >
                            Profile{" "}
                          </Link>
                          <Link
                            to={`edit/${tournament.id}`}
                            className="btn btn-warning mr-2"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteTournament()}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tournament;
