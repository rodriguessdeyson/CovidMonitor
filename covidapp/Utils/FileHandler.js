function readFile(filePath, encoding = "utf8")
{
    const fs = require('fs');
    if (encoding === null)
    {
        fs.readFile(filePath, function(err, data)
        {
            if (err)
            {
                throw err 
            }
            console.log(data);
            return data;
        });
    }

    fs.readFile(filePath, "utf8", function(err, data)
    {
        if (err)
        {
            throw err 
        }
        console.log(data);
        return data;
    });
}

module.exports =
{
	readFile
}