import React from "react"
import { Link } from "gatsby"

export default function Pagination({ totalCount, currentPage }) {
  const totalPages = Math.ceil(totalCount / 10)
  const nextPage = currentPage + 1
  const prevPage = currentPage - 1

  let nextLink = ""
  let prevLink = ""
  if (!isNaN(prevPage)) {
    prevLink = `/posts/${prevPage}`
    nextLink = `/posts/${nextPage}`
  } else {
    if (totalCount > 10) {
      nextLink = `/posts/2`
    } else {
      nextLink = `/posts/1`
    }
    prevLink = `/posts/1`
  }

  return (
    <div style={{ textAlign: "center" }}>
      <p>
        <Link to={prevLink}>← Prev</Link>
        {"   "}You are currently on page {currentPage} of {totalPages}
        {"   "}
        <Link to={nextLink}>Next →</Link>
      </p>
    </div>
  )
}
