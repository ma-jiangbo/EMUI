let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
    importAll(require.context('../../asset/icon/', true, /\.svg$/))
} catch (error) {
    console.log(error)
}