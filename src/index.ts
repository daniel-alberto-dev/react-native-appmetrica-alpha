/*
 * Version for React Native
 * © 2020 YANDEX
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * https://yandex.com/legal/appmetrica_sdk_agreement/
 */
import { NativeModules } from 'react-native';

const { AppMetrica } = NativeModules;

export type AppMetricaConfig = {
  apiKey: string;
  appVersion?: string;
  crashReporting?: boolean;
  firstActivationAsUpdate?: boolean;
  location: Location;
  locationTracking?: boolean;
  logs?: boolean;
  sessionTimeout?: number;
  statisticsSending?: boolean;
  preloadInfo?: PreloadInfo;
  // Only Android
  installedAppCollecting?: boolean;
  maxReportsInDatabaseCount?: number;
  nativeCrashReporting?: boolean;
  // Only iOS
  activationAsSessionStart?: boolean;
  sessionsAutoTracking?: boolean;
};

type PreloadInfo = {
  trackingId: string;
  additionalInfo?: Object;
};

type Location = {
  latitude: number;
  longitude: number;
  altitude?: number;
  accuracy?: number;
  course?: number;
  speed?: number;
  timestamp?: number;
};

type AppMetricaDeviceIdReason = 'UNKNOWN' | 'NETWORK' | 'INVALID_RESPONSE';

export const activate = (config: AppMetricaConfig) => {
  AppMetrica.activate(config);
};

// Android
export const getLibraryApiLevel = async (): Promise<number> =>
  AppMetrica.getLibraryApiLevel();

export const getLibraryVersion = async (): Promise<string> =>
  AppMetrica.getLibraryVersion();

export const pauseSession = () => {
  AppMetrica.pauseSession();
};

export const reportAppOpen = (deeplink?: string) => {
  AppMetrica.reportAppOpen(deeplink);
};

export const reportError = (error: string) => {
  AppMetrica.reportError(error);
};

export const reportEvent = (eventName: string, attributes: Object = {}) => {
  AppMetrica.reportEvent(eventName, attributes);
};

export const reportReferralUrl = (referralUrl: string) => {
  AppMetrica.reportReferralUrl(referralUrl);
};

export const requestAppMetricaDeviceID = (
  listener: (deviceId?: String, reason?: AppMetricaDeviceIdReason) => void
) => {
  AppMetrica.requestAppMetricaDeviceID(listener);
};

export const resumeSession = () => {
  AppMetrica.resumeSession();
};

export const sendEventsBuffer = () => {
  AppMetrica.sendEventsBuffer();
};

export const setLocation = (location?: Location) => {
  AppMetrica.setLocation(location);
};

export const setLocationTracking = (enabled: boolean) => {
  AppMetrica.setLocationTracking(enabled);
};

export const setStatisticsSending = (enabled: boolean) => {
  AppMetrica.setStatisticsSending(enabled);
};

export const setUserProfileID = (userProfileID?: string) => {
  AppMetrica.setUserProfileID(userProfileID);
};
