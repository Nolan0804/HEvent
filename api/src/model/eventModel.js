export const readEvent = async (SQLClient, {id}) => {
    const {rows} = await SQLClient.query('SELECT * FROM event WHERE id = $1', [id]);
    return rows[0];
}

