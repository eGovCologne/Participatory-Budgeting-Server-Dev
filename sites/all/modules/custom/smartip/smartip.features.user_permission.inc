<?php
/**
 * @file
 * smartip.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function smartip_user_default_permissions() {
  $permissions = array();

  // Exported permission: create proposal content.
  $permissions['create proposal content'] = array(
    'name' => 'create proposal content',
    'roles' => array(
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'node',
  );

  // Exported permission: dislike node.
  $permissions['dislike node'] = array(
    'name' => 'dislike node',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'likedislike',
  );

  // Exported permission: get any binary files.
  $permissions['get any binary files'] = array(
    'name' => 'get any binary files',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'services',
  );

  // Exported permission: get own binary files.
  $permissions['get own binary files'] = array(
    'name' => 'get own binary files',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'services',
  );

  // Exported permission: like node.
  $permissions['like node'] = array(
    'name' => 'like node',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'likedislike',
  );

  return $permissions;
}
