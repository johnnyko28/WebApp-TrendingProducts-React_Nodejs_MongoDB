import React from "react";
import { render } from "react-dom";
import './index.css';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import moment from 'moment';


const url = 'http://localhost:5000/orders';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        items: []
    }
}

  fetchTrending(url) {
    axios.get(url)
    .then(response => {
      const trendings = response.data;
      console.log(trendings, "fetchTrending function works");
      this.setState({ 
        items: trendings
      });
      console.log(this.state.items);
    })
    .catch(error => {
      console.log(error)
    })
  }

  async componentDidMount() {
    this.fetchTrending(url);
  }

  render() {
    return (
      <div>
        <div className ="Topbar">
          <img src="https://icons-for-free.com/iconfiles/png/512/fork+kitchen+knife+meanns+restaurant+icon-1320184214648369572.png" alt="" width="50" height="50"/>
          &nbsp;&nbsp;<h4>Johnny's Restaurant</h4>
        </div>
        <div className ="Topbar">
          <img src="https://pics.freeicons.io/uploads/icons/png/11197370801617256533-512.png" alt="" width="45" height="45"/>
          &nbsp;&nbsp;&nbsp;<h3>Trending Products</h3>
        </div>
            {this.state.items.map((i, index) => (
              <Card>
                <Card.Body>
                  <Card.Text>{i._id}</Card.Text> 
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last ordered {moment(i.time).startOf('hour').fromNow()}, {i.count} purchased recently </small>
                </Card.Footer>
              </Card>
          ))}
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));