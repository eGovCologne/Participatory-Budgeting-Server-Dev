<?php
/**
 * @file
 * smartip.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function smartip_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "services" && $api == "services") {
    return array("version" => "3");
  }
}

/**
 * Implements hook_views_api().
 */
function smartip_views_api() {
  return array("version" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function smartip_node_info() {
  $items = array(
    'proposal' => array(
      'name' => t('Proposal'),
      'base' => 'node_content',
      'description' => t('Proposals, ideas or other content that users may commit by webform or mobile app'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
