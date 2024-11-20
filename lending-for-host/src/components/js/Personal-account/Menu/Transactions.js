import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';

const Transactions = () => {
  // Пример фейковых транзакций
  const [transactions] = useState([
    {
      id: 1,
      date: '2024-11-01',
      amount: '$50.00',
      type: 'Payment',
      status: 'Completed',
      details: 'Purchased domain example.com',
    },
    {
      id: 2,
      date: '2024-11-05',
      amount: '$120.00',
      type: 'Refund',
      status: 'Completed',
      details: 'Refund for failed service order',
    },
    {
      id: 3,
      date: '2024-11-10',
      amount: '$200.00',
      type: 'Payment',
      status: 'Pending',
      details: 'Purchased VPS server 1',
    },
    {
      id: 4,
      date: '2024-11-15',
      amount: '$150.00',
      type: 'Payment',
      status: 'Completed',
      details: 'Renewed VPS server 2',
    },
  ]);

  // Модальное окно для отображения подробной информации о транзакции
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleShowModal = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTransaction(null);
  };

  return (
    <div className="container mt-3" style={{ width: '100%' }}>
      <h1 className="mb-3">Transaction History</h1>

      {/* Таблица транзакций */}
      <Table striped bordered hover responsive size="sm" style={{ fontSize: '1rem' }}>
        <thead style={{ backgroundColor: '#007bff', color: '#fff' }}>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Status</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
              <td>{transaction.status}</td>
              <td>{transaction.details}</td>
              <td>
                <Button variant="info" size="sm" onClick={() => handleShowModal(transaction)}>
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Модальное окно с подробностями транзакции */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Transaction Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTransaction && (
            <div>
              <p><strong>Date:</strong> {selectedTransaction.date}</p>
              <p><strong>Amount:</strong> {selectedTransaction.amount}</p>
              <p><strong>Type:</strong> {selectedTransaction.type}</p>
              <p><strong>Status:</strong> {selectedTransaction.status}</p>
              <p><strong>Details:</strong> {selectedTransaction.details}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Transactions;