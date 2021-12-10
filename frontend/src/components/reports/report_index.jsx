import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";
import { sortByDate } from "../../util/array_util";
import ReportIndexItem from "./report_index_item";
import { getReportsByStudentId } from "../../actions/report_actions";
import { connect } from "react-redux";

const ReportIndex = ({ studentId, reports, getReports }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setIsLoading(true);
        setError("");
        await getReports(studentId);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError("There was an error finding your reports.");
      }
    };
    fetchReports();
    return () => {
      setError("");
      setIsLoading(false);
    };
  }, [getReports, studentId]);

  return (
    <div className="report-index">
      {error && <p className="error-text">{error}</p>}
      {isLoading && (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#808080"}
          height={50}
          width={50}
        />
      )}
      {reports ? (
        <ul className="report-list">
          {/* todo: might need to change 'time' below to something else depending on what reports look like */}
          {reports.map((report) => (
            <li key={report._id}>
              <ReportIndexItem report={report} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

ReportIndex.propTypes = {
  studentId: PropTypes.string.isRequired,
  reports: PropTypes.array,
  getReports: PropTypes.func.isRequired,
};

const mapStateToProps = ({ entities: { reports }}) => ({
  reports: sortByDate(Object.values(reports), "date"),
})

const mapDispatchToProps = (dispatch) => ({
  getReports: (studentId) => dispatch(getReportsByStudentId(studentId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportIndex);