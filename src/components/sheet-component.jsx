export const SheetComponent = ({ columns = [], data = [] }) => {
    return (
        <div className="container-sheet-content">
            <table>
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Array.isArray(row)
                                ? row.map((cell, colIndex) => (
                                      <td key={colIndex}>{cell}</td>
                                  ))
                                : null }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
