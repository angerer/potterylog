import React, { Component } from 'react';
import axios from 'axios'
import './WorkLog.css';

const LogEntryAdd = ({add}) => {
  return (<div className="Log-entry-add"><a href="#" onClick={add}>[add]</a></div>);
}

const LogEntryTitle = ({logEntryTitle}) => {
  return (<h2 className="Log-entry-title">{logEntryTitle}</h2>);
}

const LogEntryPhoto = ({logEntryPhoto}) => {
  return (<div className="Log-entry-photo"><img className="Log-entry-thumbnail" alt="****FIXME*****" src={logEntryPhoto} /></div>);
}

const LogEntryText = ({logEntryText}) => {
  return (<div className="Log-entry-text">{logEntryText}</div>);
}

const LogEntryDelete = ({logEntryId, remove}) => {
  return (<div className="Log-entry-delete"><a href="#" onClick={remove}>[delete]</a></div>);
}

const LogEntry = ({logEntry, key, remove}) => {
  return (
    <div className="Log-entry-row">
      <LogEntryTitle logEntryTitle={Date.parse(logEntry.created_at)} />
      <LogEntryPhoto logEntryPhoto={logEntry.photo} />
      <LogEntryText logEntryText={logEntry.note} />
      <LogEntryDelete logEntryId={logEntry.id} remove={remove} />
      <div className="Log-entry-align" />
    </div>
  );
}

// Log Entry ID, for now
window.id = 0

class WorkLog extends Component {
  constructor(props){
    // Pass props to parent class
    super(props);

    this.handleRemove = this.handleRemove.bind(this);

    // Set initial state
    this.state = {
      workLog: []
    }

    this.setState({workLog: this.state.workLog});
  }

  componentDidMount(){
    // Make HTTP reques with Axios
    axios.get('http://localhost:3002/works/4/logs',
      {headers: {'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1LCJleHAiOjE1MDI5Mzg0Njh9.KI0zv4-5LIrtzDWq5bQsQEAlnGRrz_PxF9UQNf9-DhE'}}
    ).then((res) => {
      // Set state with result
      this.setState({workLog:res.data});
    });
  }

  handleRemove(id) {
    // Filter all todos except the one to be removed
    const remainder = this.state.workLog.filter((logEntry) => {
      return logEntry.id !== id ? logEntry : null;
    });
    // Update state with filter
    axios.delete('http://localhost:3002/works/4/logs' + '/' + id,
      {headers: {'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1LCJleHAiOjE1MDI5Mzg0Njh9.KI0zv4-5LIrtzDWq5bQsQEAlnGRrz_PxF9UQNf9-DhE'}}
    ).then((res) => {
      this.setState({workLog:remainder});
    })
  }

  handleAdd() {
    // Assemble data
    const logEntry = {
      id: window.id++,
      createDate: "August 1, 2017",
      text: "Lots and lots of text for the entry Lots and lots of text for the entry Lots and lots of text for the entry Lots and lots of text for the entry Lots and lots of text for the entry Lots and lots of text for the entry Lots and lots of text for the entry Lots and lots of text for the entry Lots and lots of text for the entry Lots and lots of text for the entry",
      photo: "https://img0.etsystatic.com/166/0/10446427/il_fullxfull.1101994370_k6up.jpg"
    }

    // Update data
    this.state.workLog.unshift(logEntry);

    // Update state
    this.setState({workLog: this.state.workLog});
  }

  render() {
    const entryNode = this.state.workLog.map((logEntry) => {
      return (<LogEntry logEntry={logEntry} key={logEntry.id} remove={this.handleRemove.bind(this, logEntry.id)}/>)
    });

    return (
      <div className="Work-log">
        <h1 className="Work-log-title">Work Log</h1>
        <LogEntryAdd add={this.handleAdd.bind(this)} />
        <div className="Log-entries">{entryNode}</div>
      </div>
    )
  }
}

export default WorkLog;
