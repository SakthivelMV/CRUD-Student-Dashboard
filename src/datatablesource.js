export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Students",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Sakthi",
      img: "https://images.exels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "@gmail.com",
      age: 26,
    },
    {
      id: 2,
      username: "vel",
      img: "https://images.pexels.com/photos/120770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 3,
      username: "vijay",
      img: "https",
      email: "@gmail.com",
      status: "pending",
      age: 20,
    },
    {
      id: 4,
      username: "Jai",
      img: "https",
      email: "@gmail.com",
      status: "active",
      age: 26,
    },
    {
      id: 5,
      username: "jay",
      img: "https",
      email: "@gmail.com",
      status: "passive",
      age: 27,
    },
    {
      id: 6,
      username: "arun",
      img: "https",
      email: "w@gmail.com",
      status: "active",
      age: 25,
    }
  ];