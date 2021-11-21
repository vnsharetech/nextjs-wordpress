<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'OHnM7R/c1pMJDdEk8+QaNwN4k/XRT1XNnYDveflZi18f6ItdWriAN9xd33avbQTpr3yl/zigDMo6HqiaZ3pXzQ==');
define('SECURE_AUTH_KEY',  'be4orO3fdTbm5SUT0BjltYz0HMkbQPtN28XQHdcr/n7+244NChEmKgF1S8XtcruqIdxtQuuDF5iC2HeJmIP5eA==');
define('LOGGED_IN_KEY',    '3mbWPQI5O/2oRtHbb3M8dHC55peIQ2t0rUli7b7co/WNol7gaof1q9V8p2HpGrtOL0fSx7RGnZ1xYPWg8BjqMg==');
define('NONCE_KEY',        'lP8GTr3hM/al0GibV04rfS4HO+E/LObpxW33Qy1mkZM5UQpGgBgPqPNSmENV0dynTn3aDKd/lmyj/dCcCmzyfA==');
define('AUTH_SALT',        'UFFVON0Pb0LDFQqcUCM4jI944clUD0L9WbUHjm/Mflj/0TyCrQZ7g3x6rjAQUzB0t0oEi4teZRMaxuG6el5KYA==');
define('SECURE_AUTH_SALT', 'EWwWgpwRdXI5mz/3xhbq63NCLWBmu9kTrclOsrj2i2Jbh/ZjTAXAx4ZmLqT+Aj/iD7NOEkefEDsB/o0MGDzx7Q==');
define('LOGGED_IN_SALT',   'grL78+Dy5M29HS4hiQDluQoWD9NeUJpwx/h6zDFgPnWYwdRBKnUCdPO05tGi3HhuglwEpz8kNwYg+8ZjQud02Q==');
define('NONCE_SALT',       '+TmTtmcrYpbuOOowo0ntiMFPJCwt/52bOY3BTPrDVe1RwgTgFmRFZMU60JyHOVrJuHh3ZmpdfEuh181b9IiWvQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
