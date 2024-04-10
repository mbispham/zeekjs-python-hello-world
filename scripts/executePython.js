// executePython.js
const { exec } = require('child_process');

function runPythonScript(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            // If command 'python3' fails try 'python'
            if (command.startsWith('python3')) {
                console.log('Trying with "python" instead of "python3"');
                runPythonScript('python hello.py');
            }
            return;
        }
        console.log(`${stdout}`);
        if (stderr) {
            console.error(`${stderr}`);
        }
    });
}

// Run script with 'python3' first - reattempts with 'python'
runPythonScript('python3 hello.py');
