import { Socket } from "phoenix";

let socket = new Socket("/socket", { params: { token: window.userToken } });

socket.connect();

const createCommentTemplate = (comment) => {
  const email = comment.user ? comment.user.email : "Anonymous";

  return `
  <li class="collection-item">
    ${comment.content}
    <div class="secondary-content">
      ${email}
    </div>
  </li>
`;
};

const renderComments = (comments) => {
  const renderedComments = comments.map(createCommentTemplate);

  document.querySelector(".collection").innerHTML = renderedComments.join("");
};

const renderComment = (event) => {
  document
    .querySelector(".collection")
    .insertAdjacentHTML("beforeend", createCommentTemplate(event.comment));
};

const createSocket = (topicId) => {
  let channel = socket.channel(`comments:${topicId}`, {});

  channel
    .join()
    .receive("ok", (resp) => {
      renderComments(resp.comments);
    })
    .receive("error", (resp) => {
      console.log("Unable to join", resp);
    });

  channel.on(`comments:${topicId}:new`, renderComment);

  document.querySelector("button").addEventListener("click", () => {
    const content = document.querySelector("textarea").value;

    channel.push("comment:add", { content });
  });
};

window.createSocket = createSocket;
