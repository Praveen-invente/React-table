import React, { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

import { Modal } from "react-bootstrap";

import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function App() {
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 1),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 2),
    createData("Eclair", 262, 16.0, 24, 6.0, 3),
    createData("Cupcake", 305, 3.7, 67, 4.3, 4),
    createData("Gingerbread", 356, 16.0, 49, 3.9, 5),
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [fat, setFat] = useState("");
  const [carbs, setCarbs] = useState("");
  const [protein, setProtein] = useState("");

  const openModal = (row) => {
    console.log("open modal", row);
    setName(row.name);
    setCalories(row.calories);
    setFat(row.fat);
    setCarbs(row.carbs);
    setProtein(row.protein);

    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div>
        <div>Table data </div>
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                <TableCell align="right">Action&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" onClick={() => openModal(row)}>
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div>
          <Modal show={isOpen} onHide={() => closeModal()}>
            <Modal.Body>
              <p>Calories: {calories}</p>
              <p>Fat : {fat}</p>
              <p>Carbs : {carbs}</p>
              <p>Protein : {protein}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outlined" onClick={() => closeModal()}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
