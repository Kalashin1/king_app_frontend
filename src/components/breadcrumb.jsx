import { Link } from "react-router-dom";
import Proptypes from 'prop-types';

const BreadCrumb = ({
  currentPage,
  firstLevel,
}) => {
  return (
    <div className="container-fluid bg-secondary mb-5">
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '300px' }}>
        <h1 className="font-weight-semi-bold text-uppercase mb-3">Our Shop</h1>
        <div className="d-inline-flex">
          <p className="m-0"><span>{currentPage}</span></p>
          <p className="m-0 px-2">-</p>
          <Link to={firstLevel?.link} className="m-0">{firstLevel?.text}</Link>
        </div>
      </div>
    </div>
  );
};

BreadCrumb.propTypes = {
  currentPage: Proptypes.string.isRequired,
  firstLevel: Proptypes.object.isRequired,
  secondLevel: Proptypes.object,
  thirdLevel: Proptypes.object
}

export default BreadCrumb;