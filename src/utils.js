export function row(content, styles = "") {
  return `<div class="row m-0" style="${styles}">${content}</div>`;
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`;
}
