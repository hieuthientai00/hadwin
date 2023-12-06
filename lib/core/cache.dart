import 'package:flutter_cache_manager/flutter_cache_manager.dart';
import 'package:hadwin/core/constants.dart';

class Cache {
  static final CacheManager cache = CacheManager(
    Config(
      Constants.cachedKey,
    ),
  );
}
