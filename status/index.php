<!DOCTYPE html>
<html>
<head>
<title>Servers Status</title>
<meta content="text/html" charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <section class="server-status">
    <div class="container-fluid">
      <?php
      $data = "";
      $timeout = "1";
      $services = array();
      $services[] = array("port" => "2784", "service" => "Sabnzbd", "icon" => "sab", "ip" => "");
      $services[] = array("port" => "8989", "service" => "Sonarr", "icon" => "sonarr", "ip" => "");
      $services[] = array("port" => "7878", "service" => "Radarr", "icon" => "radarr", "ip" => "");
      $services[] = array("port" => "32400", "service" => "Plex", "icon" => "plex", "ip" => "");

      foreach ($services  as $service) {
        if($service['ip']==""){
           $service['ip'] = "192.168.1.10"; // IP OF YOUR SERVER
        }
        $data .= '<div class="row"><div class="col name ' . $service['icon'] . '">' . $service['service'] . '</div>';
      	$fp = @fsockopen($service['ip'], $service['port'], $errno, $errstr, $timeout);
      	if (!$fp) {
        	$data .= '<div class="col status red">Offline</div></div>';
          //fclose($fp);
        } else {
        	$data .= '<div class="col status green">Online</div></div>';
        	fclose($fp);
      	}
      }
      echo $data;
      ?>
    </div>
  </section>
</body>
</html>
