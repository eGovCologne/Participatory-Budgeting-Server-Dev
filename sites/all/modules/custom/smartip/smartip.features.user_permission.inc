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

  // Exported permission: get a system variable.
  $permissions['get a system variable'] = array(
    'name' => 'get a system variable',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'services',
  );

  // Exported permission: get any binary files.
  $permissions['get any binary files'] = array(
    'name' => 'get any binary files',
    'roles' => array(
      'administrator' => 'administrator',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'services',
  );

  // Exported permission: get own binary files.
  $permissions['get own binary files'] = array(
    'name' => 'get own binary files',
    'roles' => array(
      'administrator' => 'administrator',
      'authenticated user' => 'authenticated user',
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

  // Exported permission: save file information.
  $permissions['save file information'] = array(
    'name' => 'save file information',
    'roles' => array(
      'administrator' => 'administrator',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'services',
  );

  // Exported permission: set a system variable.
  $permissions['set a system variable'] = array(
    'name' => 'set a system variable',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'services',
  );

  return $permissions;
}
