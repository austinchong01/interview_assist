
async function test(req, res) {
  try {
    res.send("test success");
  } catch (error) {
    console.error('Error fetching people:', error);
    res.status(500).send('Error fetching test');
  }
}

module.exports = {
  test,
};