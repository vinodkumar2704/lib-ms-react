import { Button, Table } from "antd";
import { getAvailableBooks } from "./helpers/availablebooks";
import { ColumnsType } from "antd/es/table";
import { useCallback, useContext, useState } from "react";
import { BookInterface, Status } from "./types";
import { ContextProvider } from "./context";

const Library = () => {
  const cachedCallback = useCallback(() => getAvailableBooks, []);

  const [availablebooks, setAvailableBooks] = useState(cachedCallback());
  const { isLogin } = useContext(ContextProvider);
  function borrowBook(title: string) {
    const books = JSON.parse(localStorage.getItem("books") || "");
    let foundBook = books.find((b: BookInterface) => b.title === title)!;
    foundBook.owner = isLogin.id;
    foundBook.status = Status.BORROWED;
    localStorage.setItem("books", JSON.stringify(books));
    setAvailableBooks(cachedCallback());
  }

  const columns: ColumnsType<{
    title: string;
    key: string;
    author: string;
    isbn: number;
  }> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "ISBN",
      dataIndex: "isbn",
      key: "isbn",
    },
    {
      title: "Return",
      dataIndex: "return",
      key: "return",
      render: (_, record) => (
        <Button
          type="primary"
          id="return"
          onClick={() => borrowBook(record.title)}
        >
          Borrow
        </Button>
      ),
    },
  ];
  return (
    <div>
      <Table dataSource={availablebooks} columns={columns}></Table>
    </div>
  );
};

export default Library;
