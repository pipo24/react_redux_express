import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchVehicles } from "../ducks";
import VehiclesList from "./VehiclesList";

class Vehicles extends Component {
  static initialAction() {
    return fetchVehicles();
  }

  componentDidMount() {
    if (!this.props.vehicles) {
      this.props.dispatch(Vehicles.initialAction());
    }
  }

  render() {
    const { vehicles } = this.props;
    return <VehiclesList vehicles={vehicles} />;
  }
}

const mapStateToProps = state => ({
  vehicles: state.vehicles
});

export default connect(mapStateToProps)(Vehicles);
