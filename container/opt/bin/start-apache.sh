#!/bin/sh

rm -f "$APACHE_PID_FILE"
/usr/sbin/apache2 &
tail -f /var/log/apache2/*