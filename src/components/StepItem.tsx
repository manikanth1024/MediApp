import { StyleSheet, View } from "react-native";
import { Label } from "./Label";
import { Colors, FontSize, Spacing } from "../utils/theme";

interface statusItemProps {
    key: string,
  label: string;
  completed: boolean;
  active: boolean;
};

export const StatusItem: React.FC<statusItemProps> = ({
  label,
  completed,
  active,
}: statusItemProps) => {
  return (
    <View style={styles.statusItem}>
      <View
        style={[
          styles.circle,
          completed && styles.completedCircle,
          active && styles.activeCircle,
        ]}
      />

      <Label title={label} textStyle={styles.statusText} />
    </View>
  );
}

const styles = StyleSheet.create({

  statusItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Spacing.md
  },

  circle: {
    width: 18,
    height: 18,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#C7C7C7",
    marginRight: Spacing.md,
  },

  completedCircle: {
    backgroundColor: Colors.accent,
    borderColor: Colors.accent,
  },

  activeCircle: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },

  statusText: {
    fontSize: FontSize.lg,
  },
});