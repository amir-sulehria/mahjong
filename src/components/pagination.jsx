import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Pagination from "@material-ui/lab/Pagination"
import { navigateTo } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}))

function handleChange(e, value) {
  navigateTo(`/posts/${value}`)
}
export default function PaginationRounded({ totalCount, currentPage }) {
  const classes = useStyles()

  const totalPages = Math.ceil(totalCount / 30)
  return (
    <div className={classes.root}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
    </div>
  )
}
