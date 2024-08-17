import React, { useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField as MuiTextField,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const Home = () => {
  // Example data for the table
  const [rows, setRows] = useState([
    {
      id: 1,
      col2: "Customer A",
      col3: "$500",
      col4: "High",
      col5: "01/08/2024",
      col6: "View",
    },
    {
      id: 2,
      col2: "Customer B",
      col3: "$750",
      col4: "Medium",
      col5: "03/08/2024",
      col6: "View",
    },
    {
      id: 3,
      col2: "Customer C",
      col3: "$300",
      col4: "Low",
      col5: "05/08/2024",
      col6: "View",
    },
    {
      id: 4,
      col2: "Customer D",
      col3: "$400",
      col4: "High",
      col5: "07/08/2024",
      col6: "View",
    },
    {
      id: 5,
      col2: "Customer E",
      col3: "$1000",
      col4: "Medium",
      col5: "10/08/2024",
      col6: "View",
    },
    {
      id: 6,
      col2: "Customer F",
      col3: "$250",
      col4: "Low",
      col5: "12/08/2024",
      col6: "View",
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const [dialogData, setDialogData] = useState({});

  const handleEditClick = (row) => {
    setEditRow(row);
    setDialogData(row);
    setOpenDialog(true);
  };

  const handleDeleteClick = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setEditRow(null);
  };

  const handleDialogChange = (e) => {
    setDialogData({
      ...dialogData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setRows(rows.map((row) => (row.id === editRow.id ? dialogData : row)));
    handleDialogClose();
  };

  // Function to get the color for status
  const getStatusColor = (status) => {
    switch (status) {
      case "High":
        return "#ff1744"; // Lighter Red
      case "Medium":
        return "#ffea00"; // Lighter Yellow
      case "Low":
        return "#00e676"; // Lighter Green
      default:
        return "#E0E0E0"; // Light Grey
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        style={{ marginTop: "20px", marginBottom: "40px" }}
      >
        API Dashboard
      </Typography>

      <TableContainer
        component={Paper}
        style={{ marginTop: "30px", borderRadius: 10 }}
      >
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#F0F0F0" }}>
              <TableCell>Api URL</TableCell>
              <TableCell>Vulnerability</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Recommended solution</TableCell>
              <TableCell>Others</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.col2}</TableCell>
                <TableCell>{row.col3}</TableCell>
                <TableCell>
                  <Chip
                    label={row.col4}
                    style={{
                      borderRadius: 15,
                      fontSize: "0.75rem",
                      width: 80,
                      height: 30,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: getStatusColor(row.col4),
                      color: "#000", // Text color to ensure visibility
                    }}
                    size="small" // Ensures consistent chip size
                  />
                </TableCell>
                <TableCell>{row.col5}</TableCell>
                <TableCell>{row.col6}</TableCell>
                <TableCell>{row.col7}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Edit Invoice</DialogTitle>
        <DialogContent>
          <MuiTextField
            margin="dense"
            name="col2"
            label="Customer"
            type="text"
            fullWidth
            value={dialogData.col2 || ""}
            onChange={handleDialogChange}
          />
          <MuiTextField
            margin="dense"
            name="col3"
            label="Amount"
            type="text"
            fullWidth
            value={dialogData.col3 || ""}
            onChange={handleDialogChange}
          />
          <MuiTextField
            margin="dense"
            name="col4"
            label="Status"
            type="text"
            fullWidth
            value={dialogData.col4 || ""}
            onChange={handleDialogChange}
          />
          <MuiTextField
            margin="dense"
            name="col5"
            label="Date"
            type="text"
            fullWidth
            value={dialogData.col5 || ""}
            onChange={handleDialogChange}
          />
          <MuiTextField
            margin="dense"
            name="col6"
            label="Details"
            type="text"
            fullWidth
            value={dialogData.col6 || ""}
            onChange={handleDialogChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Home;