<?php
    $fileTmpPath = $_FILES['file']['tmp_name'];
    $fileName = $_FILES['file']['name'];
    $fileNameCmps = explode(".", $fileName);
    $fileExtension = strtolower(end($fileNameCmps));
    $newFileName = md5(time() . $fileName) . '.' . $fileExtension;
    $uploadFileDir = './Images/';
    $dest_path = $uploadFileDir . $newFileName;
    if(move_uploaded_file($fileTmpPath, $dest_path))
    {
        $command = escapeshellcmd('python3 image1.py ' . $dest_path);
        $output = shell_exec($command);
        echo("<a href= \"http://165.22.14.77/Apurva/Images/".$newFileName."\"  download>");
        echo("<img src = \"http://165.22.14.77/Apurva/Images/".$newFileName."\" width = 500 >");
    }
    else
    {
        $message = 'Unable to convert the image into grayscale.';
        echo($message);
    }
?>