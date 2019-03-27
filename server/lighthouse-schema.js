const { gql } = require('apollo-server');
const GraphQLJSON = require('graphql-type-json');

const typeDefs = gql`
  scalar JSON

  type Throttling { rttMs: Int
    throughputKbps: Float
    requestLatencyMs: Float
    downloadThroughputKbps: Float
    uploadThroughputKbps: Int
    cpuSlowdownMultiplier: Int }

  type ConfigSettings { maxWaitForFcp: Int
    maxWaitForLoad: Int
    throttlingMethod: String
    auditMode: Boolean
    gatherMode: Boolean
    disableStorageReset: Boolean
    disableDeviceEmulation: Boolean
    emulatedFormFactor: String
    locale: String
    blockedUrlPatterns: String
    additionalTraceCategories: String
    extraHeaders: String
    precomputedLanternData: String
    onlyAudits: String
    skipAudits: String
    onlyCategories: [String ]
    throttling: Throttling
    output: [String ] }

  type Headings { key: String itemType: String text: String }

  type DomSize { id: String
    title: String
    description: String
    score: Float
    scoreDisplayMode: String
    rawValue: Int
    displayValue: String
    details: JSON }

  type EfficientAnimatedContent { id: String
    title: String
    description: String
    score: Int
    scoreDisplayMode: String
    rawValue: Int
    displayValue: String
    details: JSON }

  type UsesResponsiveImages { id: String
    title: String
    description: String
    score: Int
    scoreDisplayMode: String
    rawValue: Int
    displayValue: String
    details: JSON
    warnings: [String ] }

  type UsesTextCompression { id: String
    title: String
    description: String
    score: Int
    scoreDisplayMode: String
    rawValue: Int
    displayValue: String
    details: JSON }

  type UsesOptimizedImages { id: String
    title: String
    description: String
    score: Int
    scoreDisplayMode: String
    rawValue: Int
    displayValue: String
    details: JSON
    warnings: [String ] }

  type UsesWebpImages { id: String
    title: String
    description: String
    score: Int
    scoreDisplayMode: String
    rawValue: Int
    displayValue: String
    details: JSON
    warnings: [String ] }

  type UnusedCssRules { id: String
    title: String
    description: String
    score: Int
    scoreDisplayMode: String
    rawValue: Int
    displayValue: String
    details: JSON }

  type UnminifiedJavascript { id: String
    title: String
    description: String
    score: Int
    scoreDisplayMode: String
    rawValue: Int
    displayValue: String
    details: JSON
    warnings: [String ] }

  type UnminifiedCss { id: String
    title: String
    description: String
    score: Int
    scoreDisplayMode: String
    rawValue: Int
    displayValue: String
    details: JSON }

  type RenderBlockingResources { id: String
    title: String
    description: String
    score: Float
    scoreDisplayMode: String
    rawValue: Int
    displayValue: String
    details: JSON }

  type OffscreenImages { id: String
    title: String
    description: String
    score: Int
    scoreDisplayMode: String
    rawValue: Int
    displayValue: String
    details: JSON
    warnings: [String ] }

  type TotalByteWeight { id: String
    title: String
    description: String
    score: Int
    scoreDisplayMode: String
    rawValue: Int
    displayValue: String
    details: JSON }

  type Summary { wastedBytes: Int }

  type UsesLongCacheTtl { id: String
    title: String
    description: String
    score: Int
    scoreDisplayMode: String
    rawValue: Int
    displayValue: String
    details: JSON }

  type Items { firstContentfulPaint: Int
    firstContentfulPaintTs: Int
    firstMeaningfulPaint: Int
    firstMeaningfulPaintTs: Int
    firstCPUIdle: Int
    firstCPUIdleTs: Int
    interactive: Int
    interactiveTs: Int
    speedIndex: Int
    speedIndexTs: Int
    estimatedInputLatency: Int
    observedNavigationStart: Int
    observedNavigationStartTs: Int
    observedFirstPaint: Int
    observedFirstPaintTs: Int
    observedFirstContentfulPaint: Int
    observedFirstContentfulPaintTs: Int
    observedFirstMeaningfulPaint: Int
    observedFirstMeaningfulPaintTs: Int
    observedTraceEnd: Int
    observedTraceEndTs: Int
    observedLoad: Int
    observedLoadTs: Int
    observedDomContentLoaded: Int
    observedDomContentLoadedTs: Int
    observedFirstVisualChange: Int
    observedFirstVisualChangeTs: Int
    observedLastVisualChange: Int
    observedLastVisualChangeTs: Int
    observedSpeedIndex: Int
    observedSpeedIndexTs: Int }

  type Metrics { id: String
    title: String
    description: String
    score: String
    scoreDisplayMode: String
    rawValue: Float
    details: JSON }

  type MainThreadTasks { id: String
    title: String
    description: String
    score: String
    scoreDisplayMode: String
    rawValue: Int
    details: JSON }

  type NetworkServerLatency { id: String
    title: String
    description: String
    score: String
    scoreDisplayMode: String
    rawValue: Float
    displayValue: String
    details: JSON }

  type NetworkRtt { id: String
    title: String
    description: String
    score: String
    scoreDisplayMode: String
    rawValue: Float
    displayValue: String
    details: JSON }

  type NetworkRequests { id: String
    title: String
    description: String
    score: String
    scoreDisplayMode: String
    rawValue: Int
    details: JSON }

  type Diagnostics { id: String
    title: String
    description: String
    score: String
    scoreDisplayMode: String
    rawValue: Int
    details: JSON }

  type FontDisplay { id: String
    title: String
    description: String
    score: Int
    scoreDisplayMode: String
    rawValue: Boolean
    details: JSON }

  type UsesRelPreconnect { id: String
    title: String
    description: String
    score: Float
    scoreDisplayMode: String
    rawValue: Float
    displayValue: String
    details: JSON
    warnings: [String ] }

  type UsesRelPreload { id: String
    title: String
    description: String
    score: Int
    scoreDisplayMode: String
    rawValue: Int
    displayValue: String
    details: JSON }

  type BootupTime { id: String
    title: String
    description: String
    score: Float
    scoreDisplayMode: String
    rawValue: Float
    displayValue: String
    details: JSON }

  type MainthreadWorkBreakdown { id: String
    title: String
    description: String
    score: Float
    scoreDisplayMode: String
    rawValue: Float
    displayValue: String
    details: JSON }

  type Redirects { id: String
    title: String
    description: String
    score: Int
    scoreDisplayMode: String
    rawValue: Float
    displayValue: String
    details: JSON }

  type LongestChain { duration: Float length: Int transferSize: Int }

  type CriticalRequestChains { id: String
    title: String
    description: String
    score: String
    scoreDisplayMode: String
    rawValue: Boolean
    displayValue: String
    details: JSON }

  type UserTimings { id: String
    title: String
    description: String
    score: String
    scoreDisplayMode: String
    rawValue: Boolean
    details: JSON }

  type Interactive { id: String
    title: String
    description: String
    score: Float
    scoreDisplayMode: String
    rawValue: Float
    displayValue: String }

  type FirstCpuIdle { id: String
    title: String
    description: String
    score: Float
    scoreDisplayMode: String
    rawValue: Float
    displayValue: String }

  type TimeToFirstByte { id: String
    title: String
    description: String
    score: Int
    scoreDisplayMode: String
    rawValue: Float
    displayValue: String
    details: JSON }

  type MaxPotentialFid { id: String
    title: String
    description: String
    score: Float
    scoreDisplayMode: String
    rawValue: Float
    displayValue: String }

  type EstimatedInputLatency { id: String
    title: String
    description: String
    score: Int
    scoreDisplayMode: String
    rawValue: Float
    displayValue: String }

  type FinalScreenshot { id: String
    title: String
    description: String
    score: String
    scoreDisplayMode: String
    rawValue: Boolean
    details: JSON }

  type ScreenshotThumbnails { id: String
    title: String
    description: String
    score: String
    scoreDisplayMode: String
    rawValue: Boolean
    details: JSON }

  type SpeedIndex { id: String
    title: String
    description: String
    score: Float
    scoreDisplayMode: String
    rawValue: Int
    displayValue: String }

  type FirstMeaningfulPaint { id: String
    title: String
    description: String
    score: Float
    scoreDisplayMode: String
    rawValue: Float
    displayValue: String }

  type FirstContentfulPaint { id: String
    title: String
    description: String
    score: Float
    scoreDisplayMode: String
    rawValue: Float
    displayValue: String }

  type Audits {
    domSize: DomSize
    efficientAnimatedContent: EfficientAnimatedContent
    usesResponsiveImages: UsesResponsiveImages
    usesTextCompression: UsesTextCompression
    usesOptimizedImages: UsesOptimizedImages
    usesWebpImages: UsesWebpImages
    unusedCssRules: UnusedCssRules
    unminifiedJavascript: UnminifiedJavascript
    unminifiedCss: UnminifiedCss
    renderBlockingResources: RenderBlockingResources
    offscreenImages: OffscreenImages
    totalByteWeight: TotalByteWeight
    usesLongCacheTtl: UsesLongCacheTtl
    metrics: Metrics
    mainThreadTasks: MainThreadTasks
    networkServerLatency: NetworkServerLatency
    networkRtt: NetworkRtt
    networkRequests: NetworkRequests
    diagnostics: Diagnostics
    fontDisplay: FontDisplay
    usesRelPreconnect: UsesRelPreconnect
    usesRelPreload: UsesRelPreload
    bootupTime: BootupTime
    mainthreadWorkBreakdown: MainthreadWorkBreakdown
    redirects: Redirects
    criticalRequestChains: CriticalRequestChains
    userTimings: UserTimings
    interactive: Interactive
    firstCpuIdle: FirstCpuIdle
    timeToFirstByte: TimeToFirstByte
    maxPotentialFid: MaxPotentialFid
    estimatedInputLatency: EstimatedInputLatency
    finalScreenshot: FinalScreenshot
    screenshotThumbnails: ScreenshotThumbnails
    speedIndex: SpeedIndex
    firstMeaningfulPaint: FirstMeaningfulPaint
    firstContentfulPaint: FirstContentfulPaint
  }

  type Environment { networkUserAgent: String
    hostUserAgent: String
    benchmarkIndex: Int }

  type LighthouseReport { userAgent: String
    lighthouseVersion: String
    fetchTime: String
    requestedUrl: String
    finalUrl: String
    configSettings: ConfigSettings
    audits: Audits
    runWarnings: [String ]
    environment: Environment }
`

module.exports = typeDefs;
