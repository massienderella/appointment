import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import confirmada from './dataImg/confirmada.png';
import gestionado from './dataImg/gestionado.png';
import './ImportPatient.css'

export default class ImportDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pat : []
    }
  }

  componentWillMount() {
    fetch(`http://patricia.davila.cl/data_clinic/json/paciente/161988464`)
    .then(function(response){
      //console.log(response);
      return response.json();
    })
    .then(response => {
      const pat = response.data;
      console.log(pat);
      this.setState({ pat });
    });
  }

  render() {
    return (
      <section>
        <div>
          {this.state.pat.map((pat, index) => {
            return (
              <Grid>
                <div className="allDataCont" key={index}>
                  <Row className="show-grid">
                    <Col xs={8} >
                      <p className="ReservedDate">{pat.reserved_date}</p> <p className="ReservedHour">{pat.reserved_hour}</p>
                    </Col>
                    <Col xs={4}>
                      <p className="PacientType">{pat.type_pacient}</p>
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs={8}>
                      <p className="State">{pat.state}</p> <span>{(pat.state == "confirmada")? <img src={confirmada}/> :  <img src={gestionado}/> }</span>
                    </Col>
                    <Col xs={4}>
                      <p className="Clinic">{pat.clinic} / {pat.atention}</p>
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs={2}>
                      <p className="Probability">{pat.probability}</p>
                    </Col>
                    <Col xs={10}>
                      <p className="ProfessionalName">{pat.professional_name}</p>
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs={8}>
                      <p className="ProfessionalSpecialty">{pat.professional_specialty}</p>
                    </Col>
                  </Row>
                </div>
              </Grid>
            )
          })}
        </div>
      </section>
    )
  }
}


/*<div className="PatientInfo" key={index}>
<p className="ReservedDate">{pat.reserved_date}</p>
<p className="ReservedHour">{pat.reserved_hour}</p>
<p className="PacientType">{pat.type_pacient}</p>
<p className="State">{pat.state}</p> <span>{(pat.state == "confirmada")? <img src={confirmada}/> :  <img src={gestionado}/> }</span>
<p className="Clinic">{pat.clinic} / {pat.atention}</p>
<p className="Probability">{pat.probability}</p>
<p className="ProfessionalName">{pat.professional_name}</p>
<p className="ProfessionalSpecialty">{pat.professional_specialty}</p>
<i className="fas fa-ellipsis-v MenuIcon"></i>
</div>*/