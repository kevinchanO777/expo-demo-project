import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import useFetch from "../../../hook/useFetch";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";


import styles from "./nearbyjobs.style";
import { useRouter } from "expo-router";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : // Try to implement skeleton instead
        error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard/>
            // job={job} 
            // key={`nearby-job-${job?.job_id}`}
            // handleNavigate={() => router.push(`/job-details/${job.job_id}`)} />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
