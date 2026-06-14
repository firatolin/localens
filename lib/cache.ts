import { Redis } from "@upstash/redis";

const getRedisClient = () => {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    return null;
  }
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
};

export const redis = getRedisClient();

export async function getCached<T>(key: string): Promise<T | null> {
  if (!redis) return null;
  const cached = await redis.get(key);
  return cached as T | null;
}

export async function setCached<T>(
  key: string,
  value: T,
  ttlSeconds = 3600
): Promise<void> {
  if (!redis) return;
  await redis.set(key, value, { ex: ttlSeconds });
}
