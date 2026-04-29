/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { Config } from "@remotion/cli/config";
import { enableTailwind } from '@remotion/tailwind-v4';

Config.setVideoImageFormat("png"); // png = alpha channel 지원 (투명 배경 WebM)
Config.setOverwriteOutput(true);
Config.overrideWebpackConfig(enableTailwind);
