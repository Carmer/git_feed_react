import React from 'react';

const ActiveEventFactory = {
  "PushEvent": function(payload, repo) {
console.log(payload, repo)
    return(
      <div>
        <div>
            <h5>Commits: {payload.size}</h5>
            <ul>
              {payload.commits.map(commit => {
                return (
                <li>
                  {commit.message}
                </li>
              )
              })}
            </ul>

        </div>
      </div>
    )
  },

  "CreateEvent": function(payload, repo) {
console.log(payload, repo)
    return(
      <div>
        CreateEvent information here...
      </div>
    )
  },

  "CommitEvent": function(payload, repo) {
console.log(payload, repo)
    return(
      <div>
        CommitEvent information here...
      </div>
    )
  },

  "CommitCommentEvent": function(payload, repo) {
console.log(payload, repo)
    return(
      <div>
        CommitCommentEvent information here...
      </div>
    )
  },

  "DeleteEvent": function(payload, repo) {
console.log(payload, repo)
    return(
      <div>
        DeleteEvent information here...
      </div>
    )
  },

  "IssueCommentEvent": function(payload, repo) {
console.log(payload, repo)
    return(
      <div>
        IssueCommentEvent information here...
      </div>
    )
  },

  "IssueEvent": function(payload, repo) {
console.log(payload, repo)
    return(
      <div>
        IssueEvent information here...
      </div>
    )
  },

  "WatchEvent": function(payload, repo) {
console.log(payload, repo)
    return(
      <div>
        WatchEvent information here...
      </div>
    )
  },

  "MemberEvent": function(payload, repo) {
console.log(payload, repo)
    return(
      <div>
        MemberEvent information here...
      </div>
    )
  },

  "PullRequestEvent": function(payload, repo) {
console.log(payload, repo)
    return(
      <div>
        PullRequestEvent information here...
      </div>
    )
  },

  "PullRequestCommentEvent": function(payload, repo) {
console.log(payload, repo)
    return(
      <div>
        PullRequestCommentEvent information here...
      </div>
    )
  },

  "ForkEvent": function(payload, repo) {
console.log(payload, repo)
    return(
      <div>
        ForkEvent information here...
      </div>
    )
  },

}


export default ActiveEventFactory;
