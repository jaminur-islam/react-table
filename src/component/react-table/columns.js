export const COLUMN = [
  {
    header: "Id",
    accessor: "id",
    footer: "Id",
  },
  {
    header: "First Name",
    footer: "First Name",
    accessor: "first_name",
  },
  {
    header: "Last Name",
    footer: "Last Name",
    accessor: "last_name",
  },
  {
    header: "Date Of Birth",
    footer: "Date Of Birth",
    accessor: "Date_of_birth",
  },
  {
    header: "Email",
    footer: "Email",
    accessor: "email",
  },
  {
    header: "Gender",
    footer: "Gender",
    accessor: "gender",
  },
  {
    header: "Ip Address",
    footer: "Ip Address",
    accessor: "ip_address",
  },
  {
    header: "Age",
    footer: "Age",
    accessor: "age",
  },

  /*  {
    header: "Country",
    accessor: "country",
  },

  {
    header: "Number",
    accessor: "number",
  }, */
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },

  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        header: "Email",
        footer: "Email",
        accessor: "email",
      },
      {
        header: "Date Of Birth",
        footer: "Date Of Birth",
        accessor: "Date_of_birth",
      },

      {
        header: "Gender",
        footer: "Gender",
        accessor: "gender",
      },
      {
        header: "Gender2",
        footer: "Gender2",
        accessor: "gender2",
      },
    ],
  },
];
