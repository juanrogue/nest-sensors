export default () => ({
    port: parseInt(`${process.env.PORT}`) || 3000,
    database: {
      host: `${process.env.HOST}`,
      port: parseInt(`${process.env.PORT}`) || 5432
    }
  });
  